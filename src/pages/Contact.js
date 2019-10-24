import React from 'react';
import {
    TextField,
    MenuItem,
    Grid,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormControl,
    Button
} from '@material-ui/core';

const countries = [
    {
        value: 'UK',
        label: 'United Kingdom',
    },
    {
        value: 'USA',
        label: 'America',
    },
    {
        value: 'INR',
        label: 'India',
    },
    {
        value: 'JP',
        label: 'Japan',
    },
];
const Contact = () => {
    const [value, setValues] = React.useState({
        country: 'INR'
    });
    const [checked, setChecked] = React.useState(false);

    const handleChecked = event => {
        setChecked(event.target.value);
    };

    const handleChange = name => (e) => {
        setValues({ ...value, [name]: e.target.value });
    };
    return (
        <div className="contact">
            <div className="contact-box">
                <h2>Contact us</h2>
                <Grid className="contact-grid" container spacing={2}>
                    <Grid className="contact-field-container" item xs={12} sm={6}>
                        <TextField
                            className="contact-field"
                            label="Name"
                            placeholder="Full Name"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid className="contact-field-container" item xs={12} sm={6}>
                        <TextField
                            id="standard-name"
                            label="Phone"
                            placeholder="+91"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid className="contact-field-container" item xs={12} sm={6}>
                        <TextField
                            id="standard-name"
                            label="Your Email"
                            placeholder="Email Address"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid className="contact-field-container" item xs={12} sm={6}>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Country"
                            value={value.country}
                            onChange={handleChange('country')}
                            margin="normal"
                        >
                            {countries.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <textarea rows="8"></textarea>

                    </Grid>
                </Grid>
                <div className="button-row">
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" name="position" value={checked} onChange={handleChecked} >
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="I have read and accept the privacy policy*"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                    <Button>Send</Button>
                </div>
            </div>
        </div>
    );
}
export default Contact;