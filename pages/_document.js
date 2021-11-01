import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            defer
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ba0ed208919b1403041b38efe9809fe8&libraries=services"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
