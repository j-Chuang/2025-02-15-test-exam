function App(item) {
  return `<div className="container mx-auto p-4">
      <div className="row">
        <div className="col-md-4">
          <div className="bg-light p-3">
            <img
              src=${item.picture.medium}
              alt="頭像"
              className="img-fluid rounded-circle"
            />
            <h2 className="mb-0">${item.name.first} ${item.name.last}</h2>
            <p className="mb-0">${item.email}</p>
          </div>
        </div>      
      </div>
    </div>`;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

let data = [];
const wrap = document.querySelector("#root");
axios
  .get("https://randomuser.me/api/?results=10")
  .then(function (res) {
    data = res.data.results;
    let content = data.map((item) => App(item)).join("");
    wrap.innerHTML = content;
  })
  .catch((err) => {
    alert(err.message || "未取得資料");
  });
