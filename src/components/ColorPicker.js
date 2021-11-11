import React from 'react'
import { SketchPicker } from 'react-color'
import { TextField, Dialog } from '@material-ui/core'
export default ({ value, onChange, style }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false)
  const handleComplete = e => {
    onChange(e)
    setDialogOpen(false)
  }
  return (
    <>
      <TextField
        type="text"
        variant="outlined"
        value={value}
        style={{ ...style }}
        InputProps={{ inputProps: { style: { padding: '.5rem' } } }}
        onClick={() => setDialogOpen(true)}
        onChange={onChange}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }} />

      <Dialog
        onClose={() => setDialogOpen(false)}
        open={isDialogOpen}
      >
        <SketchPicker
          color={value}
          onChangeComplete={handleComplete} />
      </Dialog>
    </>
  )

}