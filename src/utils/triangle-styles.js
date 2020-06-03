const generateTriangleCss = (settings) => {
  const styles = {
    borderWidth: `0 ${settings.triangle_width / 2}px ${settings.triangle_height}px`,
    borderColor: 'transparent',
    borderBottomColor: `${settings.bg_color}`,
    position: 'absolute'
  }

  if (settings.position === 'top') {
    if (settings.border) {
      styles.bottom = `-${settings.triangle_height + parseInt(settings.border_width_bottom)}px`
    } else {
      styles.bottom = `-${settings.triangle_height}px`
    }
    styles.transform = 'rotate(180deg) translateX(-50%)'
    styles.left = `calc(50% - ${settings.triangle_width}px)`
  }

  if (settings.position === 'bottom') {
    if (settings.border) {
      styles.top = `-${settings.triangle_height + parseInt(settings.border_width_top)}px`
    } else {
      styles.top = `-${settings.triangle_height}px`
    }
    styles.left = '50%'
    styles.transform = 'translateX(-50%)'
  }

  if (settings.position === 'left') {
    if (settings.border) {
      styles.right = `calc(-${settings.triangle_height}px - ${settings.border_width_right}px)`
      styles.top = `calc(50% - ${(settings.triangle_height + parseInt(settings.border_width_top)) / 2}px)`
    } else {
      styles.right = `-${settings.triangle_height}px`
      styles.top = `calc(50% - ${settings.triangle_height / 2}px)`
    }
    styles.transform = 'rotate(90deg) translateY(-50%)'
  }

  if (settings.position === 'right') {
    if (settings.border) {
      styles.left = `calc(-${settings.triangle_height}px - ${settings.border_width_left}px)`
      styles.top = `calc(50% - ${(settings.triangle_height + parseInt(settings.border_width_top)) / 2}px)`
    } else {
      styles.left = `-${settings.triangle_height}px`
      styles.top = `calc(50% - ${settings.triangle_height / 2}px)`
    }
    styles.transform = 'rotate(270deg) translateY(-50%)'
  }

  return styles
}

export default generateTriangleCss
