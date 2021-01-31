import { useRef } from "react";
import { HashRouter, Route, Switch } from "react-router-dom"
import CoinChart from "../Routes/CoinChart";
import FourTop from "../Routes/FourTop";
import Home from "../Routes/Home";
import InstaClone from "../Routes/InstaClone";
import LOL from "../Routes/LOL";
import NotFound from "../Routes/NotFound";
import SimplePost from "../Routes/SimplePost";
import ProjectHeader from "./ProjectHeader";

const AppRouter = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  return <>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={() => <Home aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />} />

        <Route path='/project/lol' component={() => <><ProjectHeader link={['/project/coin','/project/simplepost','/project/instaclone','/project/fourtop']} /><LOL /></>} />
        <Route path='/project/coin' component={() => <><ProjectHeader link={['/project/lol','/project/simplepost','/project/instaclone','/project/fourtop']} /><CoinChart /></>} />
        <Route path='/project/simplepost' component={() => <><ProjectHeader link={['/project/lol','/project/coin','/project/instaclone','/project/fourtop']} /><SimplePost /></>} />
        <Route path='/project/instaclone' component={() => <><ProjectHeader link={['/project/lol','/project/coin','/project/simplepost','/project/fourtop']} /><InstaClone /></>} />
        <Route path='/project/fourtop' component={() => <><ProjectHeader link={['/project/lol','/project/coin','/project/simplepost','/project/instaclone']} /><FourTop /></>} />

        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  </>
}

export default AppRouter;