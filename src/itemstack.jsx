import React from "react";

import { GlobalStyle, Container, Icon, Info, Meta } from "./styles";

export default function ItemStack({ id, amount, lore = "", children }) {
  const itemInfoReference = React.createRef();

  let minecraftId = "";
  let name = "";

  if (id !== null) {
    minecraftId = id.split(":")[1];
    name = id
      .split(":")[1]
      .replace("_", " ")
      .replace(/(?:^|\s)\S/g, function(s) {
        return s.toUpperCase();
      });
  }

  function onMouseMove(event) {
    const itemInfoReferenceStyle = itemInfoReference.current.style;

    itemInfoReferenceStyle.top = event.pageY - window.scrollY + "px";
    itemInfoReferenceStyle.left = event.pageX + 15 + "px";
  }

  return (
    <>
      <GlobalStyle />
      <Container onMouseMove={onMouseMove}>
        {/* Minecraft Item Icon */}
        <Icon>
          <img
            src={`https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.14/assets/minecraft/textures/item/${minecraftId}.png`}
            alt={name}
          />
        </Icon>

        {/* Amount */}
        <Meta className="amount">{amount}</Meta>

        <Info ref={itemInfoReference}>
          {/* Display Name */}
          <Meta className="name">{name}</Meta>

          {/* Enchantments */}
          {children}

          {/* Lore */}
          {lore.split("\\n").map((line, i) => (
            <Meta key={i} className="lore">
              {line}
            </Meta>
          ))}
        </Info>
      </Container>
    </>
  );
}
