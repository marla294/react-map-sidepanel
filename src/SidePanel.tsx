import styled from "styled-components";

export interface SidePanelProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
}

const Container = styled.div<{
  isOpen: boolean;
  width?: string;
  height?: string;
}>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  background: #fff;
  width: ${(props) => (props.width ? props.width : "485px")};
  height: ${(props) => (props.height ? props.height : "522px")};
  box-shadow: -6px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px;
  overflow: hidden;
`;

const Header = styled.div`
  position: relative;
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  opacity: 0.7;
  cursor: pointer;
  z-index: 1;
  svg {
    width: 20px;
    padding: 0;
  }
`;

const Content = styled.div`
  position: relative;
  overflow-y: auto;
  padding: 24px 32px;
  flex: 1 1 auto;
`;

const SidePanel = ({
  children,
  title,
  isOpen,
  onClose,
  width,
  height,
}: SidePanelProps) => {
  return (
    <Container isOpen={isOpen} width={width} height={height}>
      <Header>
        {title}
        <CloseWrapper
          onClick={() => {
            onClose();
          }}
        >
          &times;
        </CloseWrapper>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default SidePanel;
