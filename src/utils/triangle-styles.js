const generateTriangleCss = (settings) => {
  const styles = {
    borderWidth: `0 ${settings.triangle_width / 2}px ${settings.triangle_height}px`,
    borderColor: 'transparent',
    borderBottomColor: `${settings.bg_color}`,
    position: 'absolute'
  }

  if (settings.position === 'top') {
    styles.bottom = `-${settings.triangle_height}px`
    styles.transform = 'rotate(180deg) translateX(-50%)'
    styles.left = `calc(50% - ${settings.triangle_width}px)`
  }

  if (settings.position === 'bottom') {
    styles.top = `-${settings.triangle_height}px`
    styles.left = '50%'
    styles.transform = 'translateX(-50%)'
  }

  if (settings.position === 'left') {
    styles.right = `-${settings.triangle_height}px`
    styles.transform = 'rotate(90deg) translateY(-50%)'
    styles.top = `calc(50% - ${settings.triangle_height / 2}px)`
  }

  if (settings.position === 'right') {
    styles.left = `-${settings.triangle_height}px`
    styles.transform = 'rotate(270deg) translateY(-50%)'
    styles.top = `calc(50% - ${settings.triangle_height / 2}px)`
  }

  return styles
}

export default generateTriangleCss
