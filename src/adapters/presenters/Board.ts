import { IBoardData } from '@interfaces/entities/board';
import { IBoardPresenter } from '@interfaces/presenters/board';
import { IBoardUseCase } from '@interfacesuseCases/board';
import { IBoardDTO } from '@interfacesinfrastructures/httpRequest';

class BoardPresenter implements IBoardPresenter {

  private useCases: IBoardUseCase;

  constructor(useCases: IBoardUseCase) {
    this.useCases = useCases;
  }

  async getBoard(): Promise<IBoardDTO> {
    return await this.useCases.getBoard();
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.useCases.insertBoard(author, content);
  };

}


export default BoardPresenter;