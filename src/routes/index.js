import Loadable from "react-loadable";
import LoadingComponent from "@components/loading-component";
// 首页
const AsyncHome = Loadable({
  loader: () => import("@app/home"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncWorks = Loadable({
  loader: () => import("@app/work"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncNotes = Loadable({
  loader: () => import("@app/notes"),
  loading: LoadingComponent,
  delay: 300,
});
const AsyncWork = Loadable({
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

export default [
  {
    path: "/",
    component: AsyncHome,
    icon: "icon-store",
    title: "首页",
  },
  {
    path: "/works",
    component: AsyncWorks,
    title: "作品",
    icon: "icon-pic",
    header: {
      title: "MY WORK",
      subTitle: "我的作品",
      desc: "react技术栈、vue技术栈、expressjs技术栈",
    },
    children: [
      {
        path: "/works/:id",
        component: AsyncWork,
        header: {
          desc: {
            1: "纯css绘制哆啦a梦",
            2: "日历组件，支持额外的日期标点，以及选中日期高亮",
          },
        },
      },
    ],
  },
  {
    path: "/notes",
    component: AsyncNotes,
    title: "笔记",
    icon: "icon-collection",
    header: {
      title: "MY NOTES",
      subTitle: "我的笔记",
      desc: "css、javascript、react、乱七八糟的一些分享",
    },
    children: [
      {
        path: "/notes/:type",
        component: AsyncNote,
        header: {
          desc: {
            1: "关于css的一些笔记",
            2: "关于javascript的一些笔记",
            3: "关于react的一些笔记",
            4: "乱七八糟的一些笔记",
          },
        },
      },
    ],
  },
  {
    path: "/mine",
    component: AsyncMine,
    title: "关于我",
    icon: "icon-Daytimemode",
    header: {
      title: "ABOUT ME",
      subTitle: "关于我",
      desc: "好好学习，拯救地球",
    },
  },
];
