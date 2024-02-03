class MovieFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    let {searchTerm} = this.state;
    searchTerm = searchTerm.trim();
    if (!searchTerm) {
      return;
    }

    fetch('http://www.omdbapi.com/?s=${searchTerm}&apikey=fbf0fda').then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request was either a 404 or 500');
    }).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })
  }


  render() {
    const {searchTerm, results} = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit} className="form-inline my-4">
              <input
              type="text"
              className="form-control mr-sm-2"
              placeholder="frozen"
              value={searchTerm}
              onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {results.map((movie) => {
              return null;
            })}
          </div>
        </div>
      </div>
    )
  }
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MovieFinder />)