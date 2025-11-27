import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";


const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Agenda Rapido",
            subtitle: "Jul 2020 - Dez 2022",
            srcImg: "/src/assets/image/agendaRapido.png",
            description: "Aplicativo de agendamentos desenvolvido em React Native, permitindo que usuários marquem serviços como cabeleireiro, mecânico e designer, com interfaces intuitivas e navegação fluida entre telas.",
            technologies: "Technologies: React Native, Axure RP 9",
            websiteURL: "",
            codeURL: "",
        },
        {
            title: "The Cut",
            subtitle: "Jul 2024 - Jul 2025",
            srcImg: "/src/assets/image/theCut.png",
            description: "Aplicativo de barbearia desenvolvido em React Native, permitindo gerenciar agenda, finanças e disponibilidade tanto do barbeiro quanto da barbearia, com interfaces intuitivas e funcionalidades de controle completo do negócio.",
            technologies: "Technologies: React Native, Figma",
            websiteURL: "https://www.figma.com/proto/0MWhzoUaVyJmJYXbyz7ohm/APP-Barbearia?node-id=0-1&t=2tMs6oU4PWtFa7px-1",
            codeURL: "",
        },
        {
            title: "Controla Ae",
            subtitle: "Jan 2024 - May 2024",
            srcImg: "/src/assets/image/controlaAe.png",
            description: "Aplicativo de finanças pessoais desenvolvido em React JS, permitindo que usuários controlem receitas, despesas e orçamento, com interfaces intuitivas e relatórios claros para facilitar a gestão financeira.",
            technologies: "Technologies:  React JS",
            websiteURL: "https://v0-finance-app-kappa.vercel.app/?tab=mes-atual",
            codeURL: "",
        },
        {
            title: "Opera Form - Moveis Planejados",
            subtitle: "May 2025 - Oct 2025",
            srcImg: "/src/assets/image/operaForm.png",
            description: "Site de exibição de móveis modulares desenvolvido com React, apresentando catálogo interativo de produtos, navegação intuitiva e design responsivo para destacar os móveis e facilitar a experiência do usuário.",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://www.figma.com/proto/BWiKC7SJfXP4EkavGipwY4/Opera-Form---Moveis-Planejados?node-id=0-1&t=1gdzV5VkZXCTjVW2-1",
            codeURL: "",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection