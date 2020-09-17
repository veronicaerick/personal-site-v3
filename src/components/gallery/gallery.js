import React from 'react';
import PropTypes from 'prop-types';
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
import Storybook from './images/storybook.js';
import Button from 'components/button/button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

// images
import card from './images/card.png';
import colors from './images/colors.png';
import iconSection from './images/icon-section.png';
import iconUsage from './images/icon-usage.png';
import motif from './images/motif.png';
import motifCover from './images/motif_modal.png';
import mud from './images/mud.png';
import loader from './images/loader.png';
import tabs from './images/tabs.png';
import Website from './images/website.js';
import Slide from '@material-ui/core/Slide';

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container>
        <Grid>
          <SectionTitle text="Work" />
          <div className="span-3">
            <ImageContainer>
              {images.map((image, i) => (
                <div key={i}>
                  <React.Fragment>
                    <Images>
                      <Image onClick={handleClickOpen}>
                        <span className="image">{image.image}</span>
                        <div className="overlay"></div>
                        <div className="overlay-visible"></div>
                      </Image>
                    </Images>

                    <ImageMeta className="image-meta">
                      {image.title}
                      <Subtitle className="sub-title">
                        {image.subTitle}
                      </Subtitle>
                    </ImageMeta>
                  </React.Fragment>
                </div>
              ))}
            </ImageContainer>
          </div>
        </Grid>
      </Container>

      <Dialog
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{ background: 'rgba(12, 11, 58, 0.45)', margin: '2rem' }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogHeader>
          <Title>Motif - LiveRamp React Component Library and Styleguide</Title>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogHeader>
        <DialogContent style={{ background: '#f5f5f5' }}>
          <Text>
            I helped maintain and develop LiveRamps UI Toolkit and Styleguide.
            The project consisted of building out a full React component
            library, color palette, icon library and documenting interaction
            patterns over the course of two years. See the live project{' '}
            <BadgeContainer>
              <Badge href="https://www.example.com" target="_blank">
                Project {<Website width={'30px'} height={'30px'} />}
              </Badge>
              <Badge href="https://www.example.com" target="_blank">
                Github{' '}
                <img
                  src="https://cdn.svgporn.com/logos/github-icon.svg"
                  alt="gh"
                  width={'26px'}
                />
              </Badge>
              <Badge href="https://www.example.com" target="_blank">
                Storybook <Storybook width={'24px'} height={'24px'} />
              </Badge>
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
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Gallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Gallery;

const images = [
  {
    image: (
      <img
        src={motif}
        alt="grid-2"
        key="grid"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Motif - LiveRamp UI Toolkit',
    subTitle: 'Design System',
  },
  {
    image: (
      <img
        src={mud}
        alt="mud"
        key="mud"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Mud by Mileshka - Web Dev',
    subTitle: 'Small Business Website',
  },
  {
    image: (
      <img
        src={motif}
        alt="icons"
        key="icons"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Icon Filter Background',
    subTitle: 'codepen playground',
  },
];
