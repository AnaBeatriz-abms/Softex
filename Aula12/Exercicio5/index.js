class Funcionario:
    def __init__(self, nome, salario):
        self.nome = nome
        self.salario = salario

    def descricao(self):
        return f"Funcionário {self.nome}, salário: {self.salario}"


# Classe derivada
class Gerente(Funcionario):
    def __init__(self, nome, salario, departamento):
        super().__init__(nome, salario)  # reaproveita o construtor da classe pai
        self.departamento = departamento

    def descricao(self):
        return f"Gerente {self.nome}, salário: {self.salario}, departamento: {self.departamento}"



f = Funcionario("Ana", 3000)
g = Gerente("Carlos", 5000, "TI")

print(f.descricao())  # Funcionário Ana, salário: 3000
print(g.descricao())
