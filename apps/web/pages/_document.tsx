import { config } from "@repo/ui"
import NextDocument, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from "next/document"

import { StyleSheet } from "react-native"

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage()
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet()
    return {
      ...page,

      styles: (
        <>
          <style
            id={rnwStyle.id}
            dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          />

          <style
            dangerouslySetInnerHTML={{
              __html: config.getCSS({
                // if you are using "outputCSS" option, you should use this "exclude"
                // if not, then you can leave the option out
                exclude:
                  process.env.NODE_ENV === "production"
                    ? "design-system"
                    : null,
              }),
            }}
          />
        </>
      ),
    }
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
