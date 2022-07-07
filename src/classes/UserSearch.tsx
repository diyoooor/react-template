import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { user, name } = this.state;

    return (
      <div>
        <h1>User Search</h1>
        <input
          type={"text"}
          value={name}
          onChange={(e) => {
            if (e.target.value.trim().length !== 0) {
              this.setState({ name: e.target.value });
            } else {
              this.setState({ name: "" });
            }
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") this.onClick();
          }}
        />
        <button onClick={this.onClick}>Find User</button>

        <h3>Search Result</h3>
        <div>
          Name : {user && user.name} <br />
          Age : {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
