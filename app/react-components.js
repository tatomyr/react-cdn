const MainLayout = React.createClass({
  getInitialState: function() {
    return { lang: undefined };
  },

  setLanguage: function(event) {
    console.log(event.currentTarget.id);
    this.setState({ lang: event.currentTarget.id });
  },

  render: function() {
    return (<div>
      <h1>React test</h1>
      <input type="button" id="en" onClick={this.setLanguage} value="[EN]" />
      <button id="uk" onClick={this.setLanguage}>[UK]</button>
      <hr />
      {{ en: `Hello`, uk: `Привіт`, es: `Hola` }[this.state.lang]}
    </div>);
  }
});

ReactDOM.render(<MainLayout />, document.getElementById('react-root'));
