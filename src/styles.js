import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    background: 'wheat',  
    padding: '20px',
  },
  icon: {
      marginRight: '20px',
  },
  buttons: {
      marginTop: '40px'
  },
  cardGrid: {
      padding: '20px'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56%'
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    background: 'wheat',  
    padding: '20px 0'
  },
});

export default useStyles;