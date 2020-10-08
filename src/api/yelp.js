import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {

        Authorization: 'Bearer jhbvu8IknqBEV42PeQWtAaKB7zkrJ4d8Je9stlfPaCGGOPmTTDx12_mFBbj5NT6h04HFx_V9HOlfhb6MSNQgTgRq7WvmDFqD5TEiu8bQLjKkRJZDxTZl3q4AYsQ0X3Yx'
    }
});

