import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git",
        "HTML", "CSS", "IA", "AWS", "GCP",
        "Material UI", "Figma"
    ];

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">3+ years</Typography>
                                <Typography textAlign="center">Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Diploma em Análise e Desenvolvimento de Sistemas</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Sou desenvolvedor de software com mais de 3 anos de experiência,
                        especializado em front-end, React, React Native e integrações corporativas.
                        Atuo na construção de interfaces modernas,
                        aplicações escaláveis e automações inteligentes envolvendo plataformas como SAP, Oracle, WhatsApp, Google, Microsoft e Amazon.
                        Tenho experiência sólida em JavaScript, TypeScript, .NET, SQL e criação de soluções dinâmicas com IA.
                        Formado em Análise e Desenvolvimento de Sistemas e certificado em Scrum, foco em entregar produtos eficientes, intuitivos e de alto impacto.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid size={{ xs: 5, sm: 4, md: 2, lg: 2 }} key={index}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection