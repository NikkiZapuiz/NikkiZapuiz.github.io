import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <h4>Explore my creative portfolio</h4>
            </div>
            <div id="projects" className='p-5'>
                <div className="project-list p-5">
                    <ProjectCard
                        title="Chasing Umami"
                        description="Chasing Umami successfully created a platform for me to combine my love for web development with my
                        passion for cooking. The project allowed me to showcase my skills in HTML, CSS, and Bootstrap while also
                        sharing my culinary insights with a broader audience. The responsive design ensured that users could
                        access the website on various devices, making it convenient for them to explore umami-rich recipes and
                        culinary knowledge.
                        "
                        technologies="HTML5, CSS3, Bootstrap, Github, Vercel"
                        imageSrc="/Untitled.png"
                        demoLink="https://chasing-umami.vercel.app/"
                        githubLink="https://github.com/NikkiZapuiz/Chasing-Umami"
                    />
                </div>
                <div className="project-list p-5">
                    <ProjectCard
                        title="Brainiac Clash"
                        description="Brainiac Clash is an interactive trivia game that I co-developed with my partner. This project was
                        designed to provide an engaging and challenging experience by testing player's knowledge across
                        various topics. We enhanced the game by integrating a third-party trivia API, allowing us to dynamically
                        fetch questions and broaden the range of topics. Developed using HTML, CSS, Bootstrap, JavaScript, and
                        API integration, the game offers an exciting multiplayer trivia experience
                        "
                        technologies="HTML, CSS, Bootstrap, Vanilla JS, Github, Third-party API, Vercel"
                        imageSrc="/Brainiac.png"
                        demoLink="https://brainiac-clash-js1hcceko-manikkizapuiz.vercel.app/"
                        githubLink="https://github.com/NikkiZapuiz/Brainiac-Clash"
                    />
                </div>
                <div className="project-list p-5">
                    <ProjectCard
                        title="Luxuria"
                        description="Luxuria is a booking system that empowers users to personally select their check-in and check-out dates, 
                        handpick room types, and effortlessly finalize their reservations. I adopted MySQL as the database to securely store hotel 
                        and reservation information, guaranteeing seamless real-time updates for all bookings. Leveraging the robust combination of 
                        Laravel and PHP, I meticulously crafted the backend of the application to expertly handle data processing and facilitate user 
                        interactions. On the frontend, I harnessed the power of React to construct engaging, dynamic, and interactive user interfaces."
                        technologies="HTML5, CSS3, Bootstrap, ReactJs, PHP, laravel, Github, Vercel, Postman and MySQL"
                        imageSrc="/Luxuria.png"
                        demoLink="https://luxuria-dclqld92i-manikkizapuiz.vercel.app/"
                        githubLink="https://github.com/NikkiZapuiz/Luxuria"
                    />
                    <div className='d-flex justify-content-center mt-5'>
                        <Link to={"https://github.com/NikkiZapuiz/luxuria-api"} target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>
                            <i className="fa-solid fa-code">Back-end</i>
                        </Link>
                    </div>
                </div>
                <div className="project-list p-5">
                    <ProjectCard
                        title="Tic Tac Toe"
                        description="I've created Tic Tac Toe as a JavaScript mini-project to bring the classic game to life. It's a great way to challenge my 
                        friends or family, while also enhancing my JavaScript skills. The user-friendly interface, responsive design and winning notifications
                        make it enjoyable and educational. Whether I'm a beginner looking to start or an experienced developer wanting to practice, 
                        Tic Tac Toe provides a fun way to learn and play."
                        technologies="HTML5, CSS3, Bootstrap, Vanilla JS, Github, Vercel"
                        imageSrc="/Tictactoe.png"
                        demoLink="https://tic-tac-mg54kznxd-manikkizapuiz.vercel.app/"
                        githubLink="https://github.com/NikkiZapuiz/TicTacToe"
                    />
                </div>
                <div className="project-list p-5">
                    <ProjectCard
                        title="Knowledge Check!"
                        description="I created a fun and engaging trivia app using JavaScript as a practice project. Dive into the world of coding with this 
                        interactive game, where you can test your knowledge of basic programming concepts. Challenge yourself with a variety of coding-related 
                        questions and see how well you can score!"
                        technologies="HTML5, CSS3, Bootstrap, Vanilla JS, Github, Vercel"
                        imageSrc="/Knowledge.png"
                        demoLink="https://simple-28ork10qj-manikkizapuiz.vercel.app/"
                        githubLink="https://github.com/NikkiZapuiz/simpleApp"
                    />
                </div>
            </div>
        </>
    );
};

export default Projects;
