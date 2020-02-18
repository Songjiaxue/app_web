import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingComponent from "@components/loading-component";
import Icon from "@components/icon";

// 首页
const AsyncHome = Loadable({
  loader: () => import("@app/home"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncWork = Loadable({
  loader: () => import("@app/work"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncNotes = Loadable({
  loader: () => import("@app/notes"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncWorks = Loadable({
  loader: () => import("@app/work/works"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncNote = Loadable({
  loader: () => import("@app/notes/note"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncMine = Loadable({
  loader: () => import("@app/mine"),
  loading: LoadingComponent,
  delay: 300,
});

@withRouter
class App extends React.Component {
  goPage = path => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const { history } = this.props;
    console.warn(history, "history");
    return (
      <div className="app">
        {/* logo */}
        <div className="app-logo">tomato-or-potato</div>
        {/* 导航 */}
        <div className="app-fixed">
          <div className="fixed-item">
            <Icon
              type="icon-store"
              className="home-icon"
              title="首页"
              onClick={() => {
                this.goPage("/");
              }}
            />
            <Icon
              type="icon-pic"
              className="work-icon"
              title="作品"
              onClick={() => {
                this.goPage("/work");
              }}
            />
            <Icon
              type="icon-collection"
              className="collection-icon"
              title="笔记"
              onClick={() => {
                this.goPage("/notes");
              }}
            />
            <Icon
              type="icon-Daytimemode"
              className="user-icon"
              title="关于我"
              onClick={() => {
                this.goPage("/mine");
              }}
            />
          </div>
        </div>
        {/* 内容导航 */}
        <div className="app-main">
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route exact path="/work" component={AsyncWork} />
            <Route exact path="/notes" component={AsyncNotes} />
            <Route exact path="/notes/:type" component={AsyncNote} />
            <Route exact path="/work/:id" component={AsyncWorks} />
            <Route exact path="/mine" component={AsyncMine} />
          </Switch>
        </div>
        {/* 返回居中显示 */}
        {history.location.pathname !== "/" && (
          <div className="app-back">
            <Icon
              type="icon-yooxi"
              className="footer-icon"
              title="返回"
              noTip
              onClick={() => {
                history.go(-1);
              }}
            />
          </div>
        )}

        {/* 底部 */}
        {
          <div className="app-footer">
            <Icon
              type="icon-top"
              className="footer-icon"
              title="回到顶部"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            />
          </div>
        }
      </div>
    );
  }
}

export default App;
