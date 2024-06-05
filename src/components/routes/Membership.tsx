import StoryNavbar from "../StoryNavbar.tsx";
import StoryFooter from "../StoryFooter.tsx";
import {Box, Link, Typography} from "@mui/material";
import WhiteHorizontalLine from "../elements/WhiteHorizontalLine.tsx";
import {East} from "@mui/icons-material";

const Membership = () => {
    return (
        <div>
            <StoryNavbar/>
            <WhiteHorizontalLine/>
            <Box sx={{backgroundColor: '#242424'}}>
                <Box sx={{paddingX: 5, color: '#fff', paddingY: 10, width: '35%'}}>
                    <Typography variant="h2" sx={{fontWeight: 500, fontSize: '72px', paddingY: 5}}>Membership has a  <br/> story to tell.</Typography>
                    <Typography variant="body1" sx={{paddingY: 3, fontSize: '20px', fontWeight: 100}}>
                        Medium is a home for human stories and ideas.
                        Here, anyone can share
                        insightful perspectives, useful knowledge, and life wisdom with the
                        world—without building a mailing list or a following first. The internet is
                        noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for
                        whatever you have to say.
                    </Typography>
                    <Typography variant="body1" sx={{paddingY: 3, fontSize: '20px', fontWeight: 100}}>
                        We believe that what you read and write matters. Words can divide or
                        empower us, inspire or discourage us. In a world where the most
                        sensational and surface-level stories often win, we’re building a system
                        that rewards depth, nuance, and time well spent. A space for thoughtful
                        conversation more than drive-by takes, and substance over packaging.
                    </Typography>
                    <Typography variant="subtitle1" sx={{paddingY: 5, fontSize: '28px', fontWeight: 50}}>
                        Ultimately, our goal is to deepen our collective
                        understanding of the world through the power of
                        writing.
                    </Typography>
                    <Typography variant="body1" sx={{paddingY: 3, fontSize: '20px', fontWeight: 100}}>
                        Over 100 million people connect and share their wisdom on Medium
                        every month. Many are professional writers, but just as many aren’t -
                        they’re CEOs, computer scientists, U.S. presidents, amateur novelists,
                        and anyone burning with a story they need to get out into the world. They
                        write about what they’re working on, what’s keeping them up at night,
                        what they’ve lived through, and what they’ve learned that the rest of us
                        might want to know too.
                    </Typography>
                    <Typography variant="body1" sx={{paddingY: 3, fontSize: '20px', fontWeight: 100}}>Instead of selling ads or selling your data, we’re supported by a growing
                        community of <Link>Medium members</Link> who align with our mission. If you’re
                        new here, <Link>start exploring</Link>. Dive deeper into whatever matters to you. Find
                        a post that helps you learn something new, or reconsider something
                        familiar—and then <Link>share your own story</Link>.
                    </Typography>
                </Box>
                <WhiteHorizontalLine/>
                <Box sx={{'&:hover':{color: '#000', backgroundColor: '#fff'}, color: '#fff', paddingX: 5, paddingY: 10, display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h5" sx={{fontSize: '52px'}}>Start reading</Typography>
                    <East style={{fontSize: '8rem', height: '4rem'}}/>
                </Box>
                <WhiteHorizontalLine/>
                <Box sx={{'&:hover':{color: '#000', backgroundColor: '#fff'}, color: '#fff', paddingX: 5, paddingY: 10, display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h5" sx={{fontSize: '52px'}}>Start writing</Typography>
                    <East style={{fontSize: '8rem', height: '4rem'}}/>
                </Box>
                <WhiteHorizontalLine/>
                <Box sx={{'&:hover':{color: '#000', backgroundColor: '#fff'}, color: '#fff', paddingX: 5, paddingY: 10, display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h5" sx={{fontSize: '52px'}}>Become a member</Typography>
                    <East style={{fontSize: '8rem', height: '4rem'}}/>
                </Box>
            </Box>
            <StoryFooter/>
        </div>
    );
};

export default Membership;