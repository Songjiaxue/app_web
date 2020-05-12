import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Icon from "@components/icon";
import Routes from "@routes/index";

@withRouter
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "ppp");
  }

  goPage = (path, state = {}) => {
    const { history } = this.props;
    history.push({
      pathname: path,
      state,
    });
  };

  // 递归找到当前路由项
  findRoute = routes => {
    const { history } = this.props;
    const {
      location: { pathname },
    } = history;
    for (let i = 0; i < routes.length; i++) {
      let { path } = routes[i];
      const { children } = routes[i];
      if (pathname === "/") {
        return routes[i];
      }
      // 如果是带参path
      if (path.indexOf(":") > -1) {
        path = path.replace(/:(\w+)/, "");
      }
      // 优先匹配子项
      if (children) {
        const childRoute = this.findRoute(children);
        if (childRoute) {
          const pathnameLast = pathname.split("/").reverse();
          const last = pathnameLast[0];
          return {
            ...childRoute,
            // 合并header的desc
            header: routes[i].header
              ? {
                  ...routes[i].header,
                  desc: (childRoute.header.desc || {})[last],
                }
              : null,
          };
        }
      }
      if (path !== "/" && pathname.indexOf(path) > -1) {
        return routes[i];
      }
    }
    return null;
  };

  // 递归遍历生成路由
  renderRoutes = routes => {
    let arr = [];
    routes.forEach(item => {
      if (item.children) {
        const childs = this.renderRoutes(item.children);
        console.log(childs);
        arr = [...arr, ...childs];
      }
      arr.push(
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.path}
        />,
      );
    });
    return arr;
  };

  render() {
    const { history } = this.props;
    const route = this.findRoute(Routes) || {};
    console.log(this.renderRoutes(Routes), "ooo");
    return (
      <div className="app">
        {/* logo */}
        <div className="app-logo">tomato-or-potato</div>
        {route.header && (
          <div className="app-title">
            <div className="main">{route.header.title}</div>
            <div className="sub">{route.header.subTitle}</div>
            <div className="desc">{route.header.desc}</div>
          </div>
        )}
        {/* 导航 */}
        <div className="app-fixed">
          <div className="fixed-item">
            {Routes.map(
              v =>
                v.icon && (
                  <Icon
                    type={v.icon}
                    key={v.icon}
                    title={v.title}
                    onClick={() => {
                      this.goPage(v.path);
                    }}
                  />
                ),
            )}
          </div>
        </div>
        {/* 内容导航 */}
        <div className="app-main">
          <Switch>{this.renderRoutes(Routes)}</Switch>
        </div>
        {/* 返回居中显示 */}
        {!route.icon && (
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
          // <div className="app-footer">
          //   <Icon
          //     type="icon-top"
          //     className="footer-icon"
          //     title="回到顶部"
          //     onClick={() => {
          //       window.scrollTo(0, 0);
          //     }}
          //   />
          // </div>
        }
      </div>
    );
  }
}

export default App;
