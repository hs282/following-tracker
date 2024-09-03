import logo from './logo.svg';
import './App.css';


// call endpoint for getting followings
// creating json object out of the user and storing their followings
// call endpoint again for getting followings
// compare new list of followings to the old one for people who they no longer follow, or newly followed

// first, check if desired user is self. 
// if desired user is not self, then look up a person 
// to find matching username

//Sun:
// check for people who don't follow me back
// Figma
// styling/UI

/*async function getFollowers() {
  const username = "ktwillz75"
  try {
    console.log("Fetching followers...");
    const userQueryResponse = await fetch(`https://www.instagram.com/web/search/topsearch/?query=${username}`);
    const userQueryData = await userQueryResponse.json();
    const userId = userQueryData.users.map(u => u.user).filter(u => u.username === username)[0].pk;
    let after = null;
    let hasNext = true;

    while (hasNext) {
      await fetch(`https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=` +
      encodeURIComponent(
        JSON.stringify({
          id: userId,
          include_real: true,
          fetch_mutual: true,
          first: 50,
          after: after,
        })
      )
      ).then((response) => response.json())
      .then((response) => {
        hasNext = response.data.user.edge_followed_by.page_info.has_next_page;
        after = response.data.user.edge_followed_by.page_info.end_cursor;
        followers = followers.concat(
          response.data.user.edge_followed_by.edges.map( ({node}) => {
            return {
              username: node.username,
              full_name: node.full_name,
            };
          })
        );
      });
    }
    console.log({ followers });
  } catch (error) {
    console.log(error)
  }
}*/


function App() {
  //const username = "ktwillz75";
  /*let followers = [{ username: "", fullName: ""}];
  let followings = [{ username: "", fullName: "" }];
  let dontFollowMeBack = [{ username: "", fullName: "" }];
  let iDontFollowBack = [{ username: "", fullName: "" }];*/

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
