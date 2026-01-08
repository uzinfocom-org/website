import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Bo'glanish" footer={false} description="Aloqaga chiqing.">
      <article>
        <p>Biz bilan bog'laning...</p>

        <blockquote>
          <a
            href="mailto:support@oss.uzinfocom.uz?subjects=Salom Uzinfocom!"
            className="reset"
          >
            support@oss.uzinfocom.uz
          </a>
        </blockquote>

        <p>...yoki bizni telegramda kuzatib boring.</p>

        <blockquote>
          <a href="https://t.me/s/uzinfocom_oss" className="reset">
            @uzinfocom_oss
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
