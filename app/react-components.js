const MainLayout = React.createClass({
  render: function() {
    return (<div>
      {{ en: `Hello`, uk: `Привіт`, es: `Hola` }['uk']}
    </div>);
  }
});

ReactDOM.render(<MainLayout />, document.getElementById('react-root'));
