export function get_key() {

    document.querySelector("#app").innerHTML = `
 <h2>Press Any Key</h2>
 `

    document.addEventListener('keypress', function (e) {
        const currKey = e;
        console.log(currKey);

        document.querySelector("#app").innerHTML = `
        <style>
        table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', sans-serif;
}

table td {
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
}

table tr:first-child td {
  border-top: 2px solid #3498db;
}

table tr:last-child td {
  border-bottom: 2px solid #3498db;
}

table tr:hover {
  background-color: #f8f9fa;
}</style>
   <table>
  <tr>
    <td>Code:</td>
    <td>${currKey.code}</td>
  </tr>
  <tr>
    <td>Key:</td>
    <td>${currKey.key === " " ? "Space" : currKey.key}</td>
  </tr>
  <tr>
    <td>Key Code:</td>
    <td>${currKey.keyCode}</td>
  </tr>
</table>
    `
    })


}