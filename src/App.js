const {html} = require('htm/react')
const {IntlProvider, FormattedMessage, useIntl} = require('react-intl')

const locale = 'it'
const messages = ['a', 'b', 'c', 'd', 'e', 'f']
  .map(l => [l, l.toUpperCase()])
  .reduce((acc, [lower, upper]) => ({...acc, [lower]: upper}), {})

console.log({messages})

const Home = () => {
  const {formatMessage} = useIntl()

  return html`
    <div>
      <h1>Hello, React Intl</h1>
      <h2>
        <${FormattedMessage} id="a" defaultMessage="FOOO" />
      </h2>

      <h2>
        <${FormattedMessage} id="b" defaultMessage="FOOO" />
      </h2>
      <h2>
        <${FormattedMessage} id="c" defaultMessage="FOOO" />
      </h2>
      <h2>
        ${formatMessage({id: 'd', defaultMessage: 'FOOO'})}
      </h2>
      <p>Lorem, ipsum dolor.</p>
      <h2>
        <${FormattedMessage} id="e" defaultMessage="FOOO" />
      </h2>
      <h2>
        <${FormattedMessage} id="f" defaultMessage="FOOO" />
      </h2>
    </div>
  `
}

const App = () => {
  return html`
    <${IntlProvider} locale=${locale} messages=${messages}>
      <${Home} />
    </${IntlProvider}>
  `
}

exports.App = App
