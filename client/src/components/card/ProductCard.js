import { Button, Card, CardActions, CardContent, Collapse, Rating, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

const ProductCard = ({ product }) => {

    const theme = useTheme()

    const [isExpended, setIsExpanded] = useState(false)

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem"
            }}
        >
            <CardContent>
                <Typography sx={{
                    fontSize: 14,
                    color: theme.palette.secondary[700],
                }}>
                    {product?.category}
                </Typography>
                <Typography variant='h5' component={"div"}>
                    {product?.name}
                </Typography>
                <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
                    {"$"}{Number(product?.price)?.toFixed(2)}
                </Typography>
                <Rating value={product?.rating} reactOnly />

                <Typography variant='body2'>
                    {product?.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant='primary'
                    size={"small"}
                    onClick={() => setIsExpanded(!isExpended)}
                >
                    {"See More"}
                </Button>
            </CardActions>
            <Collapse
                in={isExpended}
                timeout={"auto"}
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300]
                }}
            >
                <CardContent>
                    <Typography>
                        {"id: "} {product?._id}
                    </Typography>
                    <Typography>
                        {"Supply Left: "} {product?.supply}
                    </Typography>
                    <Typography>
                        {"Yearly Sales This Year: "} {product?.stat?.yearlySalesTotal}
                    </Typography>
                    <Typography>
                        {"Yearly Units Sold This Year: "} {product?.stat?.yearlyTotalSoldUnits}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default ProductCard