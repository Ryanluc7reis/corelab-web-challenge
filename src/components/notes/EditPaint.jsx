import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BoxPaint = styled.div`
  width: 267.94px;
  height: 96.58px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0;
  left: 5%;
  transform: translateX(-50%);
  transform: translateY(90%);
  z-index: 1;
  padding: 9px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (min-width: 600px) {
    width: auto;
    height: auto;
  }
  @media (min-width: 700px) {
    width: 100%;
  }
  @media (min-width: 1060px) {
    width: 517px;
  }
`
const ColorPaint = styled.div`
  width: 36.71px;
  height: 36.71px;
  border-radius: 25px;
  cursor: pointer;
`

export default function EditPaint({ id, title, text, color, onSave, ...props }) {
  const URI_API = process.env.API_URI

  const handleEditPaint = async (isColor) => {
    try {
      const response = await axios.patch(`${URI_API}/editNote`, {
        id,
        title,
        text,
        color: isColor
      })
      if (response.status === 200) {
        onSave()
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <BoxPaint {...props}>
      <ColorPaint
        onClick={() => handleEditPaint('rgba(169, 154, 124, 1)')}
        style={{ background: 'rgba(169, 154, 124, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(186, 226, 255, 1)')}
        style={{ background: 'rgba(186, 226, 255, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(185, 255, 221, 1)')}
        style={{ background: 'rgba(185, 255, 221, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(255, 232, 172, 1)')}
        style={{ background: 'rgba(255, 232, 172, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(255, 202, 185, 1)')}
        style={{ background: 'rgba(255, 202, 185, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(249, 148, 148, 1)')}
        style={{ background: 'rgba(249, 148, 148, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(236, 161, 255, 1)')}
        style={{ background: 'rgba(236, 161, 255, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(157, 214, 255, 1)')}
        style={{ background: 'rgba(157, 214, 255, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(218, 255, 139, 1)')}
        style={{ background: 'rgba(218, 255, 139, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(255, 162, 133, 1)')}
        style={{ background: 'rgba(255, 162, 133, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(205, 205, 205, 1)')}
        style={{ background: 'rgba(205, 205, 205, 1)' }}
      />
      <ColorPaint
        onClick={() => handleEditPaint('rgba(151, 151, 151, 1)')}
        style={{ background: 'rgba(151, 151, 151, 1)' }}
      />
    </BoxPaint>
  )
}
