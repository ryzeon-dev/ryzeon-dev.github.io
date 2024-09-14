import './App.css';
import  { useState, useEffect } from 'react';
import python from './svgs/python-icon.svg';
import rust from './svgs/rust.svg';
import react from './svgs/react.svg';
import github from './svgs/github-mark-white.svg';
import pypi from './svgs/pypi-seeklogo.svg';
import crates_io from './svgs/crate-io.png';
import c from './svgs/c-1.svg';
import cpp from './svgs/cpp.svg';
import java from './svgs/java.svg';
import bash from './svgs/bash.svg';
import html from './svgs/html.svg';
import css from './svgs/css.svg';
import sql from './svgs/sql.svg';
import { useHover } from "@uidotdev/usehooks";
import menu from './svgs/icons8-menu.svg';
import {flushSync} from "react-dom";

const GREEN = '#16a085';
const GRAY = '#232627';

function HomePage() {
    let style = {
        title: {
            color: GREEN
        },

        main: {
            color: GREEN,
            alignItems: 'center',
            marginBottom: '100px'
        },

        skill: {
            display: 'grid',
            gridTemplateColumns: '80% auto auto',
            gridTemplateRows: "auto auto auto",
            alignItems: 'center',
            alignSelf: 'center',
            width: '80%',
            alignContent: 'center',
            marginLeft: '5%'
        },

        skillText : {
            margin: "0 px",
            textAlign: "left",
            columnFill: 'auto'
        },

        hoverDiv: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },

        hoverText: {
            display: 'none',
            position: 'absolute',
            //paddingLeft: '120px'
        },

        pythonLogo: {


        },

        rustLogo: {

        },

        reactLogo: {

        },

        githubLogo : {
            height: '80px'
        },

        pypiLogo: {
            height: '80px'
        },

        cratesLogo: {
            height: '80px',
            margin: '0'
        },

        profilesDiv : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '80%',
            marginLeft: '10%'
        },

        profileLink : {
            margin: '0',
            width: '33%',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
        }
    };

    const [pythonRef, pythonHover] = useHover();
    const [rustRef, rustHover] = useHover();
    const [reactRef, reactHover] = useHover();

    const [githubRef, githubHover] = useHover();
    const [pypiRef, pypiHover] = useHover();
    const [cratesRef, cratesHover] = useHover();

    return (
        <div style={style.main}>
            <h1 style={style.title}>
                Hi! I am Ryzeon
            </h1>

            <h4>
                I'm a software developer, currently studying Computer Engineering at <br/>
                Università degli Studi di Firenze
            </h4>
            <h3>Quick overview:</h3>


            <div style={style.skill}>
                <p style={style.skillText}>The language I'm most skilled with</p>
                <h3>→</h3>
                <div ref={pythonRef} style={style.hoverDiv}>
                    <img src={python} style={{
                        width: '70px',
                        marginLeft: '10px',
                    }}></img>
                    <p style={{
                        display: (pythonHover ? "block" : "none"),
                        position: 'absolute',
                        marginLeft: '0',
                        background: GREEN,
                        color: GRAY,
                        padding: '5px',
                        borderRadius: '10px',
                        textAlign: 'end',
                        alignSelf: 'center',
                    }}>
                        <strong>Python</strong></p>
                </div>

                <p style={style.skillText}>My go-to compiled language</p>
                <h3>→</h3>
                <div ref={rustRef} style={style.hoverDiv}>
                    <img src={rust} style={{
                        width: '100px',
                        marginLeft: '-8px',
                    }}></img>
                    <p style={{
                        display: (rustHover ? "block" : "none"),
                        position: 'absolute',
                        marginLeft: '0',
                        background: GREEN,
                        color: GRAY,
                        padding: '5px',
                        borderRadius: '10px',
                        textAlign: 'end',
                        selfAlign: 'center'
                    }} ><strong>Rust</strong></p>
                </div>

                <p style={style.skillText}>My go-to web development framework</p>
                <h3>→</h3>
                <div ref={reactRef} style={style.hoverDiv}>
                    <img src={react} style={{
                        width: '120px',
                        marginLeft: '-14px',
                    }}></img>
                    <p style={{
                        display: (reactHover ? "block" : "none"),
                        position: 'absolute',
                        marginLeft: '0',
                        background: GREEN,
                        color: GRAY,
                        padding: '5px',
                        borderRadius: '10px',
                        textAlign: 'end'
                    }} ><strong>React</strong></p>
                </div>
            </div>

            <h3>
                My profiles:
            </h3>

            <div style={style.profilesDiv}>
                <a ref={githubRef} style={style.profileLink} href={"https://github.com/ryzeon-dev"}>
                    <img src={github} style={style.githubLogo}/>
                    <p style={{
                        display: (githubHover ? 'block' : 'none'),
                        position: 'absolute',
                        textDecoration: 'none',
                        color: GRAY,
                        background: GREEN,
                        padding: '5px',
                        borderRadius: '10px',
                        alignSelf: 'center',
                        marginLeft: '0',
                        marginTop: '200px',
                    }}
                    ><strong>GitHub.com</strong></p>
                </a>

                <a ref={pypiRef} style={style.profileLink} href={'https://pypi.org/user/ryzeon/'}>
                    <img src={pypi} style={style.pypiLogo}/>
                    <p style={{
                        display: (pypiHover ? 'block' : 'none'),
                        position: 'absolute',
                        textDecoration: 'none',
                        color: GRAY,
                        background: GREEN,
                        padding: '5px',
                        borderRadius: '10px',
                        alignSelf: 'center',
                        marginLeft: '0',
                        marginTop: '200px'
                    }}
                    ><strong>PyPi.org</strong></p>
                </a>

                <a ref={cratesRef} style={style.profileLink} href={'https://crates.io/users/ryzeon-dev'}>
                    <img src={crates_io} style={style.cratesLogo}/>
                    <p style={{
                        display: (cratesHover ? 'block' : 'none'),
                        position: 'absolute',
                        textDecoration: 'none',
                        color: GRAY,
                        background: GREEN,
                        padding: '5px',
                        borderRadius: '10px',
                        alignSelf: 'center',
                        marginLeft: '0',
                        marginTop: '200px'
                    }}
                    ><strong>Crates.io</strong></p>
                </a>
            </div>
        </div>
    );
}

function Skill(props) {
    let style = {
        main : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        },
        logo : {
            height: '100px',
            marginLeft : props.marginLeft ? props.marginLeft : '0'
        }
    };
    
    return props.align == 'left' ?  (
        <div style={style.main}>
            <img src={props.logo} style={{height: '100px', marginRight: props.marginRight ? props.marginRight : '50px'}}/>
            <h3>{props.name}</h3>
        </div>
    ) : (
         <div style={style.main}>
            <h3>{props.name}</h3>
            <img src={props.logo} style={{height: '100px', marginLeft: props.marginLeft ? props.marginLeft : '50px'}}/>
        </div>
    )
}

function Skills() {
    let style = {
        title: {
            color: GREEN
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
            gridTemplateRows: 'auto auto auto',
            columnGap: '50px',
            rowGap: '50px',
            gridGap: '10px',
            width: "100%",
            alignItems: 'center',
            alignContent: 'center',
        },
        logo : {
            height: '100px',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center'
        }
    }
    return (
        <div>
            <h1 style={style.title}>My Skills</h1>
            <Skill logo={python} name={"Python"} align={"left"}/>
            <Skill logo={rust} name={"Rust"} align={"right"}/>
            <Skill logo={c} name={"C"} align={"left"}/>
            <Skill logo={cpp} name={"C++"} align={"right"}/>
            <Skill logo={java} name={"Java"} align={"left"}/>
            <Skill logo={bash} name={"Bash"} align={"right"}/>
            <Skill logo={html} name={"Html"} align={"left"}/>
            <Skill logo={css} name={"Css"} align={"right"}/>
            <Skill logo={react} name={"React"} align={"left"} marginRight={"10px"} />
            <Skill logo={sql} name={"SQL"} align={"right"}  />
        </div>
    )
}

function Project(props) {
    let style = {
        main: {
            backgroundColor: GREEN,
            color: GRAY,
            borderRadius: '20px',
        }
    }

    return (
        <div style={style.main}>
            <h4>{props.name}</h4>
            <p style={{maxWidth: '80%', margin: '0 0 0 10%'}}>{props.description}</p>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                <p>Languages:</p>
                {props.languages}
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                <p>Links:</p>
                {props.links}
            </div>
        </div>
    )
}

function Projects() {
    let style = {
        main: {
            width: 'auto',
            maxWidth: '90%',
            marginBottom: '20px'
        },
        title : {
            color: GREEN
        },
        languageLogo : {
            height: '50px'
        },
        linkLogo : {
            height: '50px',
            margin: '5px'
        }
    }

    return (
        <div style={style.main}>
            <h1 style={style.title}>Recent projects:</h1>
            <Project
                name={"Skarlett"}
                description={"Procedural interpreted programming language, featuring an easy syntax, high logic computation capabilities and binary numbers manipulation"}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={python}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://github.com/skarlett-language"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />

            <Project
                name={"rns"}
                description={"Rust Network Scan"}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={rust}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://github.com/ryzeon-dev/rns"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />

            <Project
                name={"op"}
                description={"Display open ports in Linux systems"}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={python}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://github.com/ryzeon-dev/op"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />

            <Project
                name={"sysutil"}
                description={"Linux system utils library"}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={rust}/>
                        <img style={style.languageLogo} src={python}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://crates.io/crates/sysutil"}><img src={crates_io} style={style.linkLogo}/></a>
                        <a href={"https://pypi.org/project/sysutil-lib/"}><img src={pypi} style={style.linkLogo}/></a>
                        <a href={"https://github.com/ryzeon-dev/sysutil"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />

            <Project
                name={'rsAutoTor'}
                description={'TOR network automatic ip changer written in Rust'}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={rust}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://github.com/ryzeon-dev/rsAutoTor"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />

            <Project
                name={'wws'}
                description={'Multithreaded utility to scan a website using wordlists written in Python'}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={python}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://github.com/ryzeon-dev/wws"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />

            <Project
                name={'macbook-cpu-fan'}
                description={'Macbook fan controller daemon (Rust) and CLI (Python3)'}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={rust}/>
                        <img style={style.languageLogo} src={python}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://github.com/ryzeon-dev/macbook-cpu-fan"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />

            <Project
                name={"cputil"}
                description={"CPU performance utils and information tool CLI written in Python"}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={python}/>
                    </div>
                }
                links={
                    <div style={{alignSelf: 'center'}}>
                        <a href={"https://github.com/ryzeon-dev/cputil"}><img src={github} style={style.linkLogo}/></a>
                    </div>
                }
            />
            <Project
                name={"rsjson"}
                description={"Json file parser library"}
                languages={
                    <div style={{alignSelf: 'center'}}>
                        <img style={style.languageLogo} src={rust}/>
                    </div>
                }
                links={
                     <div style={{alignSelf: 'center'}}>
                        <a href={"https://crates.io/crates/rsjson"}><img src={crates_io} style={style.linkLogo}/></a>
                        <a href={"https://github.com/ryzeon-dev/rsjson"}><img src={github} style={style.linkLogo}/></a>

                    </div>                   
                }
            />
        </div>
    )
}

function App() {
    let [state, setState] = useState(<HomePage/>);
    let [menuRef, menuHover] = useHover();
    let [divRef, divHover] = useHover();

    let style = {
        main : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            width: '100%',
            position: 'fixed',
            top: '0'
        },

        svg : {
            marginLeft: '10px',
            marginTop: '10px'
        },

        menu : {
            display: 'none',
            position: 'absolute',
            background: GRAY
        },

        buttons : {
            background: GRAY,
            color: GREEN,
            borderWidth: '3px',
            borderColor: GREEN,
            borderRadius: '10px',
            fontSize: '25px',
            padding: '5px',
            margin: '5px',

        }
    }

    function navigateHome() {
        setState(<HomePage/>);
        menuHover = false;
        divHover = false;
    }

    function navigateSkills() {
        setState(<Skills/>);
        menuHover = false;
        divHover = false;
    }

    function navigateProjects() {
        setState(<Projects/>);
        menuHover = false;
        divHover = false;
    }

    return (
        <div className="App">
            <header className="App-header">
                <div style={style.main}>
                    <div ref={menuRef}>
                        <img style={{
                            marginLeft: '10px',
                            marginTop: '10px',
                            display: 'block',
                            fill: GREEN,
                            backgroundColor: GRAY,
                            borderRadius: '10px',
                            paddingLeft: '5px',
                            paddingRight: '5px',
                        }} src={menu}/>

                        <div ref={divRef} style={{
                            display: (menuHover || divHover ? 'flex' : 'none'),
                            position: 'absolute',
                            background: GRAY,
                            borderRadius: '10px',
                            marginLeft: '10px',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            padding: '5px',
                            marginTop: '-50px',
                            borderColor: GREEN,
                            borderWidth: '3px',
                        }}>
                            <button style={style.buttons} onClick={navigateHome}><strong>Home</strong></button>
                            <button style={style.buttons} onClick={navigateSkills}><strong>Skills</strong></button>
                            <button style={style.buttons} onClick={navigateProjects}><strong>Projects</strong></button>
                        </div>
                    </div>
                </div>

                {state}
            </header>
        </div>
    );
}

export default App;
