import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const person = {
    name: 'Dr Mahfuz Rahman',
    job: 'Singer'
  }
  const person2 = {
    name: 'Eva Rahman',
    job: 'Kokir Konthi Singer'
  }
  const style = {
    color: 'red',
    backgroundColor: 'grey',
    padding: '5px'
  }
  const products = [
    { name: 'Photoshop', price: '60.34', details: 'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).' },
    { name: 'Illustator', price: '40.34', details: 'Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.' },
    { name: 'Adobe PDF', price: '6.99', details: 'Access millions of high-quality, royalty-free assets for your next creative project.' },
    { name: 'Premiere Pro', price: '249.99', details: 'Access millions of high-quality, royalty-free assets for your next creative project.' },
    { name: 'After Effects', price: '199.99', details: 'Access millions of high-quality, royalty-free assets for your next creative project.' },
    { name: 'Dreamweaver', price: '26.99', details: 'Access millions of high-quality, royalty-free assets for your next creative project.' },
  ]
  const nayoks = ['Razzak', 'Jashim', 'Alamgir', 'Salman Shah', 'Sakib khan', 'bappi khan', 'Shuvo']

  const userData = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289'

    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      phone: '1-477-935-8478 x6430',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      phone: '210.067.6132',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      phone: '586.493.6943 x140',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      phone: '(775)976-6794 x41206',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      phone: '024-648-3804',
    }
  ]



  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <h1 className="" style={style}> Name: {person.name + ' ' + person.job} </h1>
        <h2 style={{ color: 'green', backgroundColor: 'white', padding: '5px' }}> Name: {person2.name + ' ' + person2.job}</h2>
        <h1>User Name</h1>
        <div style={{ display: 'flex' }}>
          <ul>
            {
              nayoks.map(nayok => <li style={{ padding: '5px 10px', border: '1px solid grey', listStyle: 'none', textAlign: 'left' }}>{nayok}</li>)
            }
          </ul>
          <ul>
            {
              products.map(product => <li style={{ padding: '5px 10px', border: '1px solid grey', listStyle: 'none', textAlign: 'left' }}>{product.name}</li>)
            }
          </ul>
          <ul>
            {
              userData.map(user => <li style={{ padding: '5px 10px', border: '1px solid grey', listStyle: 'none', textAlign: 'left' }}>{user.name}</li>)
            }
          </ul>
          <ul>
            {
              userData.map(user => <li style={{ padding: '5px 10px', border: '1px solid grey', listStyle: 'none', textAlign: 'left' }}>{user.username}</li>)
            }
          </ul>
        </div>
      </header>
      <section>
        <h1>Pricing 1</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {
            products.map(product => <Product product={product}></Product>)
          }
        </div>
        <h1>Pricing 2</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product>
        </div>
      </section>
      <section className="App-header">
        <Person></Person>
        <Person></Person>
        <Nayok name="Rubel Nayok" nayika="Moushumi"></Nayok>
        <Nayok name="Bappa Raj" nayika="cheka"></Nayok>
      </section>
      <section className="App-header">
        <Counter></Counter>
        <User></User>
      </section>
    </div>
  );
}

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const tableBorder = {
    border: '1px solid white',
    fontSize: '0.8em',
    padding: '5px'
  }

  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>User Information</h1>
      <table style={{ borderCollapse: 'Collapse' }}>
        <tr>
          <th style={tableBorder}>ID</th>
          <th style={tableBorder}>Name</th>
          <th style={tableBorder}>Email</th>
          <th style={tableBorder}>Phone</th>
          <th style={tableBorder}>Website</th>
          <th style={tableBorder}>Address</th>
        </tr>
        {
          users.map(user => {
            return <tr>
              <td style={tableBorder}>{user.id}</td>
              <td style={tableBorder}>{user.name}</td>
              <td style={tableBorder}>{user.email}</td>
              <td style={tableBorder}>{user.phone}</td>
              <td style={tableBorder}>{user.website}</td>
              <td style={tableBorder}>{user.address.street + ', ' + user.address.city}</td>
            </tr>
          })
        }
      </table>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  // const handleIncrease = () => setCount(count + 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} style={{ padding: '20px', backgroundColor: 'darkgreen', border: 0, color: 'white', fontSize: '20px' }}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ padding: '20px', backgroundColor: 'darkgreen', border: 0, color: 'white', fontSize: '20px', margin: '10px' }}>Decrease</button>
    </div>
  )
}

function Person() {

  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '5px'
  }

  return (
    <div style={personStyle}>
      <h1>Hello, My Name is Sakib Khan</h1>
      <h3 style={{ color: 'red' }}>I am actor</h3>
      <p style={{ color: 'green' }}>I am doing this job last 6 years.</p>
    </div>
  )
}

function Nayok(props) {

  const NayokStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '5px'
  }

  return (
    <div style={NayokStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3 style={{ color: 'red' }}>Hero of {props.nayika}</h3>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    width: '250px',
    height: '250px',
    border: '1px solid grey',
    backgroundColor: 'lightgrey',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px'
  }
  const { name, price, details } = props.product
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>${price}</h2>
      <p style={{ textAlign: 'left' }}>{details}</p>
      <button style={{ padding: '10px', backgroundColor: 'darkgreen', border: 0, color: 'white' }}>Buy now</button>
    </div>
  )
}

export default App;
