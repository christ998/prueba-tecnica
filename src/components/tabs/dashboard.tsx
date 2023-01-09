import React, {useEffect, useState} from "react";
import {Box, Button, Card, CardActions, CardContent, Collapse, Typography} from "@mui/material";

function Dashboard() {
    const [forms, setForms] = useState<any[]>([]);
    const [expanded, setExpanded] = useState<number[]>([]);

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const x = localStorage.key(i);
            setForms(state => [...state, JSON.parse(localStorage.getItem(x))])
        }
    }, []);

    const handleExpanded = (index: number) => {
        if (expanded.includes(index)) {
            const copy = expanded.filter(element => element !== index)
            setExpanded(copy)
        } else {
            setExpanded(prevState => [...prevState, index])
        }
    }

    return (
        <Box display={"flex"} flexDirection={"column"} gap={2}>
            {forms.map((item, index) =>
                <Card key={index}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {item.fecha}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleExpanded(index)}>Leer más</Button>
                    </CardActions>
                    <Collapse in={expanded.includes(index)} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Box display={"grid"} gridTemplateColumns="repeat(2, 100px)" gap={2}>
                                {Object.entries(item).map((element, index) => (
                                    <React.Fragment key={index}>
                                        <Box>
                                            {element[0]}
                                        </Box>
                                        <Box>
                                            {element[1]}
                                        </Box>
                                    </React.Fragment>
                                ))}

                            </Box>
                        </CardContent>
                    </Collapse>
                </Card>
            )}

        </Box>

    );
}

export default Dashboard;
