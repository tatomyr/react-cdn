const MainLayout = React.createClass({
  getInitialState: () => ({ lang: navigator.language.slice(0,2) }),

  setLanguage(lang) {
    console.log(lang);
    this.setState({ lang });
  },

  languagesSet: () => [
    { id: 'en', name: 'English', word: 'Hello' },
    { id: 'uk', name: 'Ukrainian', word: 'Привіт' },
    { id: 'es', name: 'Español', word: 'Hola' },
  ],

  render() {
    return (
      <div>
        <h1>Say Hello In...</h1>
        {this.languagesSet().map((item) => (
          <button
            key={item.id}
            className={item.id === this.state.lang && 'select-button' || ''}
            onClick={() => this.setLanguage(item.id)}
          >
            {item.name}
          </button>
        ))}
        <h1>
          {this.languagesSet().find(item => item.id === this.state.lang).word}
        </h1>
      </div>
    );
  }
});

ReactDOM.render(<MainLayout />, document.getElementById('react-root'));
