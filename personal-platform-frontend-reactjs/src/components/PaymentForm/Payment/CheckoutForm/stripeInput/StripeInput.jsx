import { Stack, Title, ErrorMessage } from "./StripeInput.style";

function StripeInput({title, error, children}) {
  return (
    <Stack className="stack-spacing">
      <Title>{title}</Title>
      <Stack>
        {children}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Stack>
    </Stack>
  );
}

export default StripeInput;
