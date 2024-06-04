/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState, useRef } from 'react'
import '../controller/useControllerStyle.css'
import UseController from '../controller/useController'

function ControllerTool() {
  const [controllerIndex, setControllerIndex] = useState(null)
  const requestRef = useRef()

  useEffect(() => {
    const handleGamepadConnected = (event) => {
      const gamepad = event.gamepad
      setControllerIndex(gamepad.index)
    }

    const handleGamepadDisconnected = () => {
      setControllerIndex(null)
    }

    window.addEventListener('gamepadconnected', handleGamepadConnected)
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected)

    // Check for already connected gamepads when component mounts
    const gamepads = navigator.getGamepads()
    for (let i = 0; i < gamepads.length; i++) {
      if (gamepads[i]) {
        setControllerIndex(gamepads[i].index)
        break
      }
    }

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected)
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  const handleButtons = (buttons) => {
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i]
      const buttonElement = document.getElementById(`controller-b${i}`)
      const selectedButtonClass = 'selected-button'

      if (buttonElement) {
        if (button.value > 0) {
          buttonElement.classList.add(selectedButtonClass)
          buttonElement.style.filter = `contrast(${button.value * 150}%)`
        } else {
          buttonElement.classList.remove(selectedButtonClass)
          buttonElement.style.filter = `contrast(100%)`
        }
      }
    }
  }

  const updateStick = (elementId, leftRightAxis, upDownAxis) => {
    const multiplier = 25
    const stickLeftRight = leftRightAxis * multiplier
    const stickUpDown = upDownAxis * multiplier

    const stick = document.getElementById(elementId)
    const x = Number(stick.dataset.originalXPosition)
    const y = Number(stick.dataset.originalYPosition)

    stick.setAttribute('cx', x + stickLeftRight)
    stick.setAttribute('cy', y + stickUpDown)
  }

  const handleSticks = (axes) => {
    updateStick('controller-b10', axes[0], axes[1])
    updateStick('controller-b11', axes[2], axes[3])
  }

  const gameLoop = () => {
    if (controllerIndex !== null) {
      const gamepad = navigator.getGamepads()[controllerIndex]
      if (gamepad) {
        handleButtons(gamepad.buttons)
        handleSticks(gamepad.axes)
      }
    }
    requestRef.current = requestAnimationFrame(gameLoop)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(gameLoop)
    return () => cancelAnimationFrame(requestRef.current)
  }, [controllerIndex])

  return (
    <>
      <div style={{ color: '#e6e8db' }} className="controller-tool">
        <h1 className="title">Controller Tool</h1>
        <p>This tool allows you to check the functionality of your games.</p>
      </div>
      <UseController />
    </>
  )
}

export default ControllerTool
