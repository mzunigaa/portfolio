import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import BasicModal from './BasicModal'
import Divider from "@material-ui/core/Divider";
import ModalContent from './ModalContent'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {images} from './Data'

import {
    ProjectsContainer, 
    ProjectsH1, 
    ProjectsH2,
} from './ProjectsSectionElements'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '90%',
    },
    image: {
      position: 'relative',
      height: 350,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.30,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 19,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

const ProjectsSection = () => {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState(null);

    const showProjectModal = (e,image) => {
      setValues({
        id: image.id,
        project: image.project,
        description: image.description,
        tags : image.tags,
        photos: image.photos,
     })
     console.log(values?.description);
      setShowModal(true);
    };

      const Cards = () => {
        return (
          <ProjectsContainer id="projects">   
          <ProjectsH1>Projects</ProjectsH1> 
          <ProjectsH2>Take a look at my projects</ProjectsH2> 
              <div className={classes.root}>
                  {images.map((image) => (
                  <ButtonBase
                      focusRipple
                      key={image.title}
                      className={classes.image}
                      onClick={(e) => showProjectModal(e,image)}
                      focusVisibleClassName={classes.focusVisible}
                      style={{
                      width: image.width,
                      }}
                  >
                      <span
                      className={classes.imageSrc}
                      style={{
                          backgroundImage: `url(${image.url})`,
                      }}
                      />
                      <span className={classes.imageBackdrop} />
                      <span className={classes.imageButton}>
                      <Typography
                          component="span"
                          variant="subtitle1"
                          color="inherit"
                          className={classes.imageTitle}
                      >
                          {image.title}
                          <span className={classes.imageMarked} />
                      </Typography>
                      </span>
                  </ButtonBase>
                  ))}
              </div>
              </ProjectsContainer>
        );
      };

    return (
            <div>
             {showModal && values && (
                <BasicModal
                  open={showModal}
                  onClose={() => setShowModal(false)}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <Typography variant="h6" gutterBottom>
                        {values.project}
                  </Typography>
                  <Divider light={true} style={{ marginBottom: 15 }} />
                  <ModalContent values={values}/>
                </BasicModal>
            )}
            <Cards />
          </div>
    )
}

export default ProjectsSection
