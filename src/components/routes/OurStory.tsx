import React from 'react';
import StoryNavbar from "../StoryNavbar.tsx";
import StoryFooter from "../StoryFooter.tsx";
import {Box, Link, Typography} from "@mui/material";

const OurStory = () => {
    return (
        <div>
            <StoryNavbar/>
            <Box sx={{height: '2px', width: '100%', backgroundColor:'#fff'}}></Box>
            <Box sx={{backgroundColor: '#242424'}}>
                <Box sx={{paddingX: 5, color: '#fff'}}>
                    <Typography sx={{}}>Everyone has a <br/> story to tell.</Typography>
                    <Typography>
                        Medium is a home for human stories and ideas.
                        Here, anyone can share
                        insightful perspectives, useful knowledge, and life wisdom with the
                        world—without building a mailing list or a following first. The internet is
                        noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for
                        whatever you have to say.
                    </Typography>
                    <Typography>
                        We believe that what you read and write matters. Words can divide or
                        empower us, inspire or discourage us. In a world where the most
                        sensational and surface-level stories often win, we’re building a system
                        that rewards depth, nuance, and time well spent. A space for thoughtful
                        conversation more than drive-by takes, and substance over packaging.
                    </Typography>
                    <Typography>
                        Ultimately, our goal is to deepen our collective
                        understanding of the world through the power of
                        writing.
                    </Typography>
                    <Typography>
                        Over 100 million people connect and share their wisdom on Medium
                        every month. Many are professional writers, but just as many aren’t -
                        they’re CEOs, computer scientists, U.S. presidents, amateur novelists,
                        and anyone burning with a story they need to get out into the world. They
                        write about what they’re working on, what’s keeping them up at night,
                        what they’ve lived through, and what they’ve learned that the rest of us
                        might want to know too.
                    </Typography>
                    <Typography>Instead of selling ads or selling your data, we’re supported by a growing
                        community of <Link>Medium members</Link> who align with our mission. If you’re
                        new here, <Link>start exploring</Link>. Dive deeper into whatever matters to you. Find
                        a post that helps you learn something new, or reconsider something
                        familiar—and then <Link>share your own story</Link>.
                    </Typography>
                </Box>
            </Box>
            <StoryFooter/>
        </div>
    );
};

export default OurStory;