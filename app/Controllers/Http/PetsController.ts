import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class PetsController {
  public async index(ctx: HttpContextContract) {
    return 'GET Pets';
  }

  public async store({ request, response }: HttpContextContract) {
    response.status(201);
    return {
      message: 'POST pet',
      body: request.body(),
    };
  }

  public async show({ params }: HttpContextContract) {
    return 'GET Pet: ' + params.id;
  }

  public async update() {
    return 'PUT Pet';
  }

  public async destroy() {
    return 'DELETE Pet';
  }
}
