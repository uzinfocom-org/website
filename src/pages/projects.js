import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import LinkIcon from "@material-ui/icons/ArrowForwardRounded";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import ProjectCards from "../components/ProjectCards";
import Bar from "../components/Bar";
import { useFadeIn } from "../components/Animation/useFadeIn";

export const data = graphql`
  query {
    github {
      organization(login: "uzinfocom-org") {
        login
        url
        ... on Github_Organization {
          pinnedItems(types: REPOSITORY, first: 10) {
            totalCount
            edges {
              node {
                ... on Github_Repository {
                  id
                  name
                  description
                  homepageUrl
                  url
                  #                  stargazers {
                  #                    totalCount
                  #                  }
                  #                  pushedAt
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Projects = ({
  data: {
    github: {
      organization: { url, pinnedItems }
    }
  }
}) => {
  const [fadeIn, animated] = useFadeIn();

  return (
    <Fragment>
      <SEO title="Projects" />
      <Box clone pb={6}>
        <Grid
          style={fadeIn}
          component={animated.div}
          container
          justify="center"
        >
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="h3" paragraph>
              Loyihalarimiz
            </Typography>
            <Bar />
            <Box mb={4}>
              <ProjectCards projects={pinnedItems.edges} />
            </Box>
            <Typography variant="body2">Ko'proq</Typography>
            <Box
              clone
              fontWeight="fontWeightBold"
              display="inline-flex"
              alignItems="center"
            >
              <Link color="textPrimary" href={url} target="_blank">
                Github da
                <Box clone ml={0.3}>
                  <LinkIcon fontSize="small" />
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Projects;
