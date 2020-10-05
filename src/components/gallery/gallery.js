import React from 'react';
import {
  Badge,
  BadgeContainer,
  Container,
  Grid,
  ImageContainer,
  Image,
  Images,
  ImageMeta,
  Subtitle,
  Title,
  Text,
  DialogImages,
  DialogHeader,
} from './gallery.css';
import SectionTitle from 'components/section-title/title';
// import Storybook from './images/storybook.js';
import Button from 'components/button/button';
import Dialog from '@material-ui/core/Dialog';
import Tooltip from '@material-ui/core/Tooltip';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
// images
import card from './images/card.png';
import colors from './images/colors.png';
import dataVizOne from './images/data-viz-1.png';
import dataVizTwo from './images/data-viz-2.png';
import dataVizThree from './images/data-viz-3.png';
import demo from './images/demo.png';
import iconSection from './images/icon-section.png';
import iconUsage from './images/icon-usage.png';
import heal from './images/heal.png';
import motif from './images/motif.png';
import motifCover from './images/motif_modal.png';
import mud from './images/mud.png';
import loader from './images/loader.png';
import tabs from './images/tabs.png';
//icons
import External from './images/external.js';
import Website from './images/website.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function Gallery() {
  const [openOne, setOneOpen] = React.useState(false);

  const [openTwo, setTwoOpen] = React.useState(false);

  const handleClickOneOpen = () => {
    setOneOpen(true);
  };

  const handleOneClose = () => {
    setOneOpen(false);
  };

  const handleClickTwoOpen = () => {
    setTwoOpen(true);
  };

  const handleTwoClose = () => {
    setTwoOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid>
          <SectionTitle text="Work" />
          <div className="span-3">
            <ImageContainer>
              <div>
                <Images>
                  <Image onClick={handleClickOneOpen}>
                    <span className="image">
                      <img
                        src={motif}
                        alt="grid-2"
                        key="grid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </span>
                    <div className="overlay"></div>
                    <div className="overlay-visible"></div>
                  </Image>
                </Images>

                <ImageMeta className="image-meta">
                  Motif - LiveRamp UI Toolkit
                  <Subtitle className="sub-title">Design Library</Subtitle>
                </ImageMeta>
              </div>
              <div>
                <Images>
                  <Image onClick={handleClickTwoOpen}>
                    <span className="image">
                      <img
                        src={demo}
                        alt="demographics"
                        key="demo"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </span>
                    <div className="overlay"></div>
                    <div className="overlay-visible"></div>
                  </Image>
                </Images>

                <ImageMeta className="image-meta">
                  Data Visualization
                  <Subtitle className="sub-title">UI Design</Subtitle>
                </ImageMeta>
              </div>
              <div>
                <Images>
                  <Tooltip
                    title="Coming Soon"
                    classes={{
                      tooltip: classes.customTooltip,
                      arrow: classes.customArrow,
                    }}
                  >
                    <Image>
                      <span className="image">
                        <img
                          src={heal}
                          alt="heal"
                          key="heal"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </span>
                      <div className="overlay"></div>
                      <div className="overlay-visible"></div>
                    </Image>
                  </Tooltip>
                </Images>

                <ImageMeta className="image-meta">
                  Heal - Therapy for All
                  <Subtitle className="sub-title">Product Design/UX</Subtitle>
                </ImageMeta>
              </div>
              <div>
                <Images>
                  <a href="https://mudbymileshka.com">
                    <Image>
                      <span className="image" target="_blank">
                        <img
                          src={mud}
                          alt="mud"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </span>
                      <div
                        className="overlay"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <External
                          height="30px"
                          width="30px"
                          style={{
                            background: 'white',
                            borderRadius: '50px',
                            padding: '1rem',
                          }}
                        />
                      </div>
                      <div className="overlay-visible"></div>
                    </Image>
                  </a>
                </Images>

                <ImageMeta className="image-meta">
                  Mud by Mileshka
                  <Subtitle className="sub-title">Squarespace Web Dev</Subtitle>
                </ImageMeta>
              </div>
            </ImageContainer>
          </div>
        </Grid>
      </Container>

      <Dialog
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{ background: 'rgba(12, 11, 58, 0.45)', margin: '2rem' }}
        fullScreen
        open={openOne}
        onClose={handleOneClose}
        TransitionComponent={Transition}
      >
        <DialogHeader>
          <Title>Motif - LiveRamp React Component Library and Styleguide</Title>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleOneClose}
            aria-label="close"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogHeader>
        <DialogContent style={{ background: '#f5f5f5' }}>
          <Text>
            I helped develop LiveRamp&apos;s UI Toolkit and Styleguide, Motif.
            The project consisted of working with the UX and design team to
            implement a full React component library, color palette, icon
            library and documentation of interaction patterns. <br></br>
            <br></br>
            My high-level goals were to:
            <ul>
              <li>- Develop design system content</li>
              <li>
                - Publish guidelines for elements, components, and patterns
              </li>
              <li>
                - Collaborate with the front-end team to implement components
                and reusable patterns to be used in 3+ SaaS web applications
              </li>
              <li>
                - Deprecate legacy toolkit and increase Motif&apos;s adoption
              </li>
              <li>
                - Improve the tooling and accesibility of Design System
                Management
              </li>
            </ul>
            <BadgeContainer>
              <Badge href="https://motif.nexus.liveramp.com/" target="_blank">
                Project {<Website width={'30px'} height={'30px'} />}
              </Badge>
              <Badge href="https://github.com/LiveRamp/motif" target="_blank">
                Github{' '}
                <img
                  src="https://cdn.svgporn.com/logos/github-icon.svg"
                  alt="gh"
                  width={'26px'}
                />
              </Badge>
              {/* <Badge href="https://www.example.com" target="_blank">
                Storybook <Storybook width={'24px'} height={'24px'} />
              </Badge> */}
            </BadgeContainer>
          </Text>
          <DialogImages>
            <img src={motifCover} alt="motifCover" />
            <img src={colors} alt="colors" />
            <img src={iconSection} alt="iconSection" />
            <img src={iconUsage} alt="iconUsage" />
            <img src={card} alt="tabs" />
            <img src={loader} alt="loader" />
            <img src={tabs} alt="tabs" />
          </DialogImages>
        </DialogContent>
        <DialogActions style={{ background: '#f5f5f5' }}>
          <Button onClick={handleOneClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{ background: 'rgba(12, 11, 58, 0.45)', margin: '2rem' }}
        fullScreen
        open={openTwo}
        onClose={handleTwoClose}
        TransitionComponent={Transition}
      >
        <DialogHeader>
          <Title>Data Visualizations</Title>

          <IconButton
            edge="start"
            color="inherit"
            onClick={handleTwoClose}
            aria-label="close"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogHeader>
        <DialogContent style={{ background: '#f5f5f5' }}>
          <Text>
            These Data Visuzlizations were created at my first year at LiveRamp
            to build campaign insights within the self service web application,
            Connect. I worked with the Design team and PM to uncover what
            insights they wanted to see at a certain step in a common workflow.
          </Text>
          <DialogImages>
            <img src={dataVizThree} alt="dv3" />
            <img src={dataVizOne} alt="dv1" />
            <img src={dataVizTwo} alt="dv2" />
          </DialogImages>
        </DialogContent>
        <DialogActions style={{ background: '#f5f5f5' }}>
          <Button onClick={handleTwoClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Gallery;

const useStyles = makeStyles(() => ({
  customTooltip: {
    // I used the rgba color for the standard "secondary" color
    backgroundColor: '#34418E',
    fontSize: '1.5rem',
  },
}));
