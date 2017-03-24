const MainLayout = React.createClass({
  getInitialState: () => ({ lang: undefined }),

  setLanguage(event) {
    console.log(event.currentTarget.id);
    this.setState({ lang: event.currentTarget.id });
  },

  render() {
    return (
      <div>
        <h1>Say Hello In...</h1>
        <input type="button" id="en" className="select-button" onClick={this.setLanguage} value="English" />
        <button id="uk" className="select-button" onClick={this.setLanguage}>Ukrainian</button>
        <button id="es" className="select-button" onClick={this.setLanguage}>Español</button>
        <h1>
          {{ en: `Hello`, uk: `Привіт`, es: `Hola` }[this.state.lang]}
        </h1>
      </div>
    );
  }
});

ReactDOM.render(<MainLayout />, document.getElementById('react-root'));
