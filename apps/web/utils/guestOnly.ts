import { GetServerSideProps, PreviewData } from "next"
import { ParsedUrlQuery } from "querystring"
import { isRequestAuthed } from "./authHelper"

export function guestOnlyGetSSP<
  Props extends { [key: string]: any } = { [key: string]: any },
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
>(
  getServerSideProps?: GetServerSideProps<Props, Params, Preview>
): GetServerSideProps<Props, Params, Preview> {
  return async (ctx) => {
    const isAuthed = await isRequestAuthed(ctx)

    if (isAuthed) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    }

    if (getServerSideProps) {
      return getServerSideProps(ctx)
    }

    return {
      props: {} as Props,
    }
  }
}
