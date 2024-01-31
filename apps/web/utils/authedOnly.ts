import { GetServerSideProps, PreviewData } from "next"
import { ParsedUrlQuery } from "querystring"

import { isRequestAuthed } from "./authHelper"

export function authedOnlySSP<
  Props extends { [key: string]: any } = { [key: string]: any },
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
>(
  getServerSideProps?: GetServerSideProps<Props, Params, Preview>
): GetServerSideProps<Props, Params, Preview> {
  return async (ctx) => {
    const isAuthed = await isRequestAuthed(ctx)

    if (!isAuthed) {
      return {
        redirect: {
          destination: "/sign-in",
          permanent: false,
        },
      }
    }

    const getSSRResult = getServerSideProps
      ? await getServerSideProps(ctx)
      : { props: {} as Props }
    return getSSRResult
  }
}
