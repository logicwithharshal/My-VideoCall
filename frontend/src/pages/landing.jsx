import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="nexLanding">
            <nav className="nexNav">
                <div className="nexLogo">NexMeet</div>
                <div className="nexNavLinks">
                    <button onClick={() => navigate("/auth", { state: { isRegister: false } })} className="nexNavSignIn">
                        Log In
                    </button>
                    <button onClick={() => navigate("/auth", { state: { isRegister: true } })} className="nexNavBtn">
                        Sign Up
                    </button>
                </div>
            </nav>

            <main className="nexHero">
                <div className="nexHeroLeft">
                    <p className="nexEyebrow">Professional video meetings</p>
                    <h1 className="nexHeroTitle">
                        Meet<br />without<br />limits.
                    </h1>
                    <p className="nexHeroSub">
                        NexMeet brings people together — clearly, simply, and without the hassle.
                        {/* No downloads. No complexity. Just connect. */}
                    </p>
                    <div className="nexHeroBtns">
                        <button
                            className="nexPrimaryBtn"
                            onClick={() => navigate("/auth")}
                        >
                            Launch NexMeet
                        </button>
                    </div>
                    {/* <p className="nexHeroNote">Sign in to access your meetings</p> */}
                </div>

                <div className="nexHeroRight">
                    {/* OPTION 1: Custom mockup with avatars (Alex, Sara, Mike, Ryan) */}
                    {/* Uncomment below and comment OPTION 2 to use this */}
                    
                    <div className="nexMockup">
                        <div className="nexMockupBar">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="nexMockupScreen">
                            <div className="nexMockupGrid">
                                <div className="nexMockupTile">
                                    <div className="nexAvatar" style={{backgroundColor: "#4f46e5"}}>A</div>
                                    <p>Alex</p>
                                </div>
                                <div className="nexMockupTile active">
                                    <div className="nexAvatar" style={{backgroundColor: "#0891b2"}}>S</div>
                                    <p>Sara</p>
                                </div>
                                <div className="nexMockupTile">
                                    <div className="nexAvatar" style={{backgroundColor: "#059669"}}>M</div>
                                    <p>Mike</p>
                                </div>
                                <div className="nexMockupTile">
                                    <div className="nexAvatar" style={{backgroundColor: "#d97706"}}>R</div>
                                    <p>Ryan</p>
                                </div>
                            </div>
                            <div className="nexMockupControls">
                                <div className="nexMockupBtn red"></div>
                                <div className="nexMockupBtn"></div>
                                <div className="nexMockupBtn"></div>
                            </div>
                        </div>
                    </div>
                   

                    {/* OPTION 2: Your original mobile.png image */}
                    {/* Comment this out and uncomment OPTION 1 to use the mockup */}
                    {/* <img src="/mobile.png" alt="NexMeet preview" className="nexHeroImg" /> */}
                </div>
            </main>

            {/* <footer className="nexFooter">
                <p>© 2025 NexMeet. Built for people who value their time.</p>
            </footer> */}
        </div>
    );
}