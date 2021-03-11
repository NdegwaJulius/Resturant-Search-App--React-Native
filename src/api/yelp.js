import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses/search',
    headers:{
        Authorization: 'Bearer Ta2nKI220smlSYFlTdm4hgZ-as5BE47DYBk1ZN4sVzNoS19320oRSHZNaRzTjiVq2oyHE9mE_KAWwe6Z9FS7_rhn-EOPwZ2LBGLhP_obpfqyxEDPicpKRng8zRJJYHYx'
    }
});

