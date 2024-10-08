import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
    Box,
    Paper,
    Typography,
    Grid2 as Grid,
    Avatar,
    TextField,
    FormControlLabel,
    Button,
    Checkbox,
} from "@mui/material";

const Profile = () => {
    const { data: session } = useSession();
    const names = session?.user?.name?.split(" ");
    const [formData, setFormData] = useState({
        firstName: names ? names[0] : "",
        lastName: names ? names[1] : "",
        email: session?.user?.email,
        password: "",
        confirmPassword: "",
        receiveEmails: false,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "receiveEmails" ? checked : value,
        }));
    };


    return (
        <>
            <h1>Profile</h1>
            <Box>
                <Typography variant="h4" sx={{ paddingBottom: 4 }}>
                    Hello {session ? session?.user?.name : "User"}, welcome to
                    your profile.
                </Typography>
                <Paper sx={{ padding: "1rem 2rem" }}>
                    <Grid container justifyContent="center">
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Avatar
                                sx={{
                                    width: 100,
                                    height: 100,
                                    marginBottom: 2,
                                }}
                                src={session?.user?.image as string}
                            />
                            <form
                                onSubmit={handleSubmit}
                                style={{ maxWidth: 600, margin: "0 auto" }}
                            >
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleFormChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleFormChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            required
                                            fullWidth
                                            type="email"
                                            label="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            required
                                            fullWidth
                                            type="password"
                                            label="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleFormChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            required
                                            fullWidth
                                            type="password"
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleFormChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="receiveEmails"
                                                    checked={
                                                        formData.receiveEmails
                                                    }
                                                    onChange={handleFormChange}
                                                    color="primary"
                                                />
                                            }
                                            label="Receive sales analytics emails"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Save Changes
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                </Paper>
            </Box>
        </>
    );
};

export default Profile;
