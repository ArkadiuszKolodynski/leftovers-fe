import {
  BottomNavigation,
  Box,
  Divider,
  Link,
  LinkProps,
  Paper,
  Typography,
} from "@mui/material";
import facebookLogo from "../assets/facebook.svg";
import instagramLogo from "../assets/instagram.svg";

export const Footer = () => {
  const linkProps: LinkProps = {
    className: "no-underline hover:underline",
    color: "inherit",
    fontSize: "small",
  };

  return (
    <Paper className="fixed bottom-0 left-0 right-0" sx={{ px: 9 }}>
      <BottomNavigation>
        <Box className="flex w-full flex-row items-center justify-between">
          <Box className="flex flex-row gap-5">
            <Box className="mr-3 flex flex-row gap-2">
              <img
                src={facebookLogo}
                alt="Facebook"
                width="24px"
                height="24px"
              />
              <img
                src={instagramLogo}
                alt="Instagram"
                width="24px"
                height="24px"
              />
            </Box>
            <Link
              href="mailto://contact@leftovers.com"
              className="no-underline hover:underline"
              sx={{ color: "text.secondary" }}
              variant="body2"
            >
              contact@leftovers.com
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link href="#" {...linkProps}>
              Terms of Services
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link href="#" {...linkProps}>
              Privacy Policy
            </Link>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              powered by <span className="underline">BotAI</span>
            </Typography>
          </Box>
        </Box>
      </BottomNavigation>
    </Paper>
  );
};
