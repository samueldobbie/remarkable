import React from "react"
import { Box, Button } from "@mui/material"

interface Props {
  setActivePage: (page: string) => void
}

function OptionSection(props: Props): JSX.Element {
  const { setActivePage } = props

  const containerStyles = {
    textAlign: "center",
  }

  const buttonStyles = {
    opacity: 0.7,
    display: "inline-block",
    mr: 0.5,
    ml: 0.5,
  }

  const handleMoveToSettings = () => {
    setActivePage("settings")
  }

  const handleWriteReview = () => {
    window.open("https://chrome.google.com/webstore/detail/remarkable/mjmbcbgnjacnhjpoikgilmocjlfmcogp")
  }

  return (
    <Box sx={containerStyles}>
      <Button
        onClick={handleMoveToSettings}
        sx={buttonStyles}
      >
        Settings
      </Button>

      <Button
        onClick={handleWriteReview}
        sx={buttonStyles}
      >
        Write review 🎉
      </Button>
    </Box>
  )
}

export default OptionSection