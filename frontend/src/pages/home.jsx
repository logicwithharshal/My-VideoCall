import React, { useContext, useState } from "react";
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from '../contexts/AuthContext';
import "../styles/home.css";

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    }

    let handleNewMeeting = async () => {
        const code = Math.random().toString(36).substring(2, 8);
        await addToUserHistory(code);
        navigate(`/${code}`);
    }

    return (
        <div className="homeContainer">
            <div className="homeNavBar">
                <div className="homeNavBrand">
                    <VideoCallIcon sx={{ fontSize: 32, color: '#a0c4ff' }} />
                    <h3>NexMeet</h3>
                </div>
                <div className="homeNavActions">
                    {/* <IconButton onClick={() => navigate("/history")} sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        <RestoreIcon />
                    </IconButton> */}
                    {/* <span onClick={() => navigate("/history")} className="homeNavLink">History</span> */}
                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                        variant="outlined"
                        sx={{
                            color: 'rgba(255,255,255,0.8)',
                            borderColor: 'rgba(255,255,255,0.3)',
                            borderRadius: '8px',
                            textTransform: 'none',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className="homeMain">
                <div className="homeLeftPanel">
                    <h1 className="homeHeroTitle">
                        Video calls and meetings <span>for everyone</span>
                    </h1>
                    <p className="homeHeroSubtitle">
                        Connect, collaborate and celebrate from anywhere with NexMeet
                    </p>

                    <div className="homeActions">
                        <Button
                            onClick={handleNewMeeting}
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{
                                backgroundColor: '#1976d2',
                                borderRadius: '12px',
                                padding: '12px 24px',
                                fontSize: '1rem',
                                textTransform: 'none',
                                fontWeight: 600,
                                '&:hover': { backgroundColor: '#1565c0' }
                            }}
                        >
                            New Meeting
                        </Button>

                        <div className="homeJoinRow">
                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outline-basic"
                                label="Enter a code"
                                variant="outlined"
                                value={meetingCode}
                                sx={{
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'rgba(255,255,255,0.08)',
                                        color: 'white',
                                        '& fieldset': { borderColor: 'transparent' },
                                        '&:hover fieldset': { borderColor: 'transparent' },
                                        '&.Mui-focused fieldset': { borderColor: 'transparent' },
                                    },
                                    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
                                    '& .MuiInputLabel-root.Mui-focused': { color: '#a0c4ff' },
                                }}
                            />
                            <Button
                                onClick={handleJoinVideoCall}
                                disabled={!meetingCode}
                                sx={{
                                    minWidth: '170px',
                                    color: meetingCode ? 'white' : 'rgba(255,255,255,0.3)',
                                    backgroundColor: meetingCode ? '#1976d2' : 'transparent',
                                    borderRadius: '12px',
                                    padding: '12px 20px',
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: meetingCode ? '#1565c0' : 'transparent',
                                    }
                                }}
                            >
                                Join
                            </Button>
                        </div>
                    </div>

                    {/* <div className="homeDivider"></div> */}

                    {/* <p className="homeFootNote">
                        <a href="https://github.com/logicwithharshal/My-VideoCall" target="_blank" rel="noreferrer">
                            Learn more
                        </a> about MyVideoCall
                    </p> */}
                </div>

                <div className="homeRightPanel">
                    <img src='/logo3.png' alt="video call illustration" />
                </div>
            </div>
        </div>
    );
}

export default withAuth(HomeComponent);