# Guia de Geração de Código para Agentes de IA

Este documento serve como um guia para agentes de IA sobre como gerar e manter a base de código deste projeto.

## Princípios Gerais

- **Consistência:** O código gerado deve ser consistente com o estilo e a arquitetura existentes.
- **Clareza:** O código deve ser claro, conciso e fácil de entender.
- **Modularidade:** Os componentes devem ser modulares e reutilizáveis.

## Estrutura de Componentes

Ao criar novos componentes, siga a estrutura existente:

- Os componentes devem ser colocados no diretório `src/components`.
- Os componentes de UI genéricos devem ser colocados no diretório `src/components/ui`.
- Cada componente deve ter seu próprio arquivo (`.tsx`).

## Estilo de Código

- Siga as convenções de nomenclatura e formatação existentes.
- Use TypeScript para garantir a segurança de tipos.
- Adicione comentários ao código quando necessário para explicar a lógica complexa.

## Testes

- Ao adicionar novos recursos, adicione também testes unitários e de integração correspondentes.
- Certifique-se de que todos os testes passem antes de enviar o código.

## Documentação

- Mantenha a documentação do projeto atualizada com as novas alterações.
- Documente os novos componentes e suas propriedades.
