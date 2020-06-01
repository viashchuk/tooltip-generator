const generateTooltipCss = (settings) => {
  const styles = {
    width: `${settings.width}px`,
    background: `${settings.bg_color}`,
    color: `${settings.text_color}`,
    textAlign: `${settings.align_text}`,
    padding: `${settings.padding_top}px ${settings.padding_right}px ${settings.padding_bottom}px ${settings.padding_left}px`
  }

  if (parseInt(settings.border_radius) !== 0) {
    styles.borderRadius = `${settings.border_radius}px`
  }

  if (settings.border) {
    styles.border = `${settings.border_type} ${settings.border_color}`
    styles.borderWidth = `${settings.border_width_top}px ${settings.border_width_right}px ${settings.border_width_bottom}px ${settings.border_width_left}px`
  }

  if (settings.shadow) {
    styles.boxShadow = `${settings.shadow_horizontal}px ${settings.shadow_vertical}px ${settings.shadow_blur}px ${settings.shadow_color}`
  }

  if (settings.position === 'top') {
    styles.bottom = `calc(100% + ${settings.triangle_height + 5}px)`
    styles.left = '50%'
    styles.transform = 'translateX(-50%)'
  } else {
    styles.top = `calc(100% + ${settings.triangle_height + 5}px)`
    styles.left = '50%'
    styles.transform = 'translateX(-50%)'
  }

  if (settings.position === 'left') {
    styles.right = `calc(100% + ${settings.triangle_height + 5}px)`
    styles.top = '50%'
    styles.transform = 'translateY(-50%)'
    styles.left = 'inherit'
  }

  if (settings.position === 'right') {
    styles.left = `calc(100% + ${settings.triangle_height + 5}px)`
    styles.top = '50%'
    styles.transform = 'translateY(-50%)'
  }

  return styles
}

export default generateTooltipCss
